import { Suspense } from "react";
import SignInForm from "./SignInForm";

export const metadata = {
  title: "Agent Portal | Travelian",
};

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="login-wrapper" style={{ justifyContent: "center" }}>Loading...</div>}>
      <SignInForm />
    </Suspense>
  );
}