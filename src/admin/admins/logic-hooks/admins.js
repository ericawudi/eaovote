const TITLE = "Admins";
const columns = ["Admin", "Email", "Phone", "Actions"];

export default function useAdminLogic() {
  const admins = [
    ["Joe James", "admin@gmail.com", "23354698776"],
    ["Joe James", "admin@gmail.com", "23354698776"],
    ["Joe James", "admin@gmail.com", "23354698776"],
    ["Joe James", "admin@gmail.com", "23354698776"],
  ];

  return { TITLE, columns, admins };
}
