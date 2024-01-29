import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "../Components/adminPosts/adminPosts";
import AdminPostForm from "../Components/adminPostForm/adminPostForm";
import AdminUsers from "../Components/adminUsers/adminUsers";
import AdminUserForm from "../Components/adminUserForm/adminUserForm";

import { auth } from "@/lib/auth";

const AdminPage = async () => {

  const session:any = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId = {session?.user?.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;