import AuthnAdmin from "internal/base/middleware/authAdmin";
import type { NextPage } from "next";

const AdminPage: NextPage = () => {
  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
};

export default AuthnAdmin(AdminPage);
