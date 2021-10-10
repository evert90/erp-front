import React from "react";
import { createPopper } from "@popperjs/core";
import { FinancialRecord } from "../../class/FinancialRecord";
import { financialRecordService } from "../../services/financial-record.service";
import { useToast } from "../Toast/ToastProvider";

type TableDropdownProps = {
  record: FinancialRecord
  stateChanger: Function
}

const TableDropdown: React.FC<TableDropdownProps> = (props) => {

    const toast = useToast();

    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef: any = React.createRef();
    const popoverDropdownRef: any = React.createRef();
    const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "left-start",
    });
      setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    const deleteRecord = (event: React.MouseEvent) => {
        event.preventDefault();
        financialRecordService.deleteById(props.record.id)
            .then((response) => {
                toast.pushSuccess("Registro removido com sucesso", 5000)
                props.stateChanger(props.record)
            })
            .catch(error => {
                toast?.pushError("Erro ao excluir registro. " + error, 7000, "truncate-2-lines");
            }).finally(() => {})
    }

    return (
        <>
            <a
                className="px-3 py-1 text-blueGray-500"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <i className="fas fa-ellipsis-v"></i>
            </a>

            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-[10rem]"
                }
            >
                <a
                    href="#pablo"
                    className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="mr-2 fas fa-edit"></i> Editar
                </a>
                <a
                    href="#pablo"
                    className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100"
                    }
                    onClick={(e) => deleteRecord(e)}
                >
                    <i className="mr-2.5 fas fa-trash"></i> Remover
                </a>
            </div>
        </>
    );
};

export default TableDropdown;
