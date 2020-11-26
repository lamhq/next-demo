/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { GetServerSidePropsContext } from 'next';
import { Container, ObjectType, Token } from 'typedi';

/**
 * Injects a service into a class property or constructor parameter.
 * No exception thrown when service was not registered
 */
export function OptionalInject(
  typeOrName?: ((type?: any) => Function) | string | Token<any>,
): Function {
  return (object: Object, propertyName: string, index?: number) => {
    Container.registerHandler({
      object,
      propertyName,
      index,
      value: (containerInstance) => {
        let identifier: any;
        if (typeof typeOrName === 'string') {
          identifier = typeOrName;
        } else if (typeOrName instanceof Token) {
          identifier = typeOrName;
        } else if (!typeOrName) {
          identifier = () => (Reflect as any).getMetadata('design:type', object, propertyName);
        }
        let result;
        try {
          result = containerInstance.get<any>(identifier);
        } catch (error) {
          result = undefined;
        }
        return result;
      },
    });
  };
}

/**
 * Retrieves the service with given type from the service container.
 */
export function getService<T>(type: ObjectType<T>, containerId?: string): T {
  return containerId ? Container.of(containerId).get(type) : Container.get(type);
}

/**
 * Get query string value from next context
 */
export function getQueryValueFromContext(
  context: GetServerSidePropsContext,
  key: string,
  defaultValue = '',
): string {
  if (context.query[key]) {
    return context.query[key] as string;
  }
  return defaultValue;
}
