import { Suspense } from "react";
import styles from "./admin.module.css";
import { auth } from "@/lib/auth";
import AdminPosts from "@/app/Components/adminPosts/adminPosts";
import AdminPostForm from "@/app/Components/adminPostForm/adminPostForm";
import AdminUsers from "@/app/Components/adminUsers/adminUsers";
import AdminUserForm from "@/app/Components/adminUserForm/adminUserForm";

const AdminPage = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId = {session.user.id} />
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
