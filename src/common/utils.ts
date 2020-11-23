/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Container, ContainerInstance, Token } from 'typedi';
import cookies from 'next-cookies';
import { GetServerSidePropsContext } from 'next';
import { AUTH_TOKEN } from '../constants/auth';

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

export function getDIContainer(nextContext?: GetServerSidePropsContext): ContainerInstance {
  if (nextContext) {
    const { token } = cookies(nextContext);
    if (token) {
      const container = Container.of(token);
      container.set(AUTH_TOKEN, token);
      return container;
    }
  }
  return Container.of('global');
}
