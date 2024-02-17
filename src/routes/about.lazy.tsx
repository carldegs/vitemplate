import { AboutPage } from '@/features/misc';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: AboutPage,
});
