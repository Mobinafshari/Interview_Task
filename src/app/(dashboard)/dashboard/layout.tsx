import AuthChecker from "../_components/AuthChecker";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthChecker>{children}</AuthChecker>;
}
