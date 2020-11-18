import { useRouter } from 'next/router';

interface NavigationHelpers {
  redirect: (link: string) => void;
  goBack: () => void;
}

export default function useNavigator(): NavigationHelpers {
  const router = useRouter();

  function redirect(link: string) {
    // set a delay to prevent issue state update on an unmounted component
    setTimeout(() => router.push(link), 10);
  }

  function goBack() {
    router.back();
  }

  return {
    redirect,
    goBack,
  };
}
