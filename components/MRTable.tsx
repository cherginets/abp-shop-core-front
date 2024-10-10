import {
  MaterialReactTable as OriginalMaterialReactTable, MaterialReactTableProps, MRT_RowData, MRT_TableOptions,
  useMaterialReactTable as useOriginalMaterialReactTable
} from "material-react-table";
import { MRT_Localization_RU } from 'material-react-table/locales/ru';

export function MRTable<TData extends MRT_RowData>(props: MaterialReactTableProps<TData>) {
  return <OriginalMaterialReactTable {...props} />
}

export function useMRTable<TData extends MRT_RowData>(tableOptions: MRT_TableOptions<TData>) {
  return useOriginalMaterialReactTable({
    ...tableOptions,
    localization: MRT_Localization_RU,
  })
}