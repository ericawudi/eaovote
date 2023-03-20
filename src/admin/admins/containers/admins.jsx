import PageTemplateLayout from "../../components/page-layout-template";
import DataTable from "../../components/mui-data-table";
import ActionButtons from "../../components/action-buttons";
import useAdminLogic from "../logic-hooks/admins";

export default function Admins() {
  const { admins, columns, TITLE } = useAdminLogic();

  const data = admins.map((row) => [...row, <ActionButtons />]);
  const adminCount = admins.length;
  return (
    <PageTemplateLayout helperText={`There are ${adminCount} admins`}>
      <DataTable title={TITLE} columns={columns} data={data} />
    </PageTemplateLayout>
  );
}
