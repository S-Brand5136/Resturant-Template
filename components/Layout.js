import Sitenav from "./Sitenav";

export default function Layout({ children }) {
  return (
    <div>
      <Sitenav />
      {children}
    </div>
  );
}
