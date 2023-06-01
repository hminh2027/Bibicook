import { lazyImport } from "@/utils/lazyImport";

import { LoginForm, RegisterForm } from "@/features/auth/routes";
import { FormLayout } from "@/features/Auth/components";

export const publicRoutes = [
  {
    path: "/auth/login",
    element: (
      <FormLayout>
        <LoginForm />
      </FormLayout>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <FormLayout>
        <RegisterForm />
      </FormLayout>
    ),
  },
];
