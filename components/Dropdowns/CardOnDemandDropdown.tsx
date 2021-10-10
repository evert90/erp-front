import { createPopper } from "@popperjs/core";
import React from "react";
import { CardOnDemand } from "../../class/CardOnDemand";

type CardOnDemandDropdownProps = {
    cardOnDemand: CardOnDemand
    remove: Function,
    edit: Function
}

export const CardOnDemandDropdown: React.FC<CardOnDemandDropdownProps> = (props) => {
        // dropdown props
        const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
        const btnDropdownRef: any = React.createRef();
        const popoverDropdownRef: any = React.createRef();
        const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "left-start",
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 15],
                },
              },
            ],
        });
          setDropdownPopoverShow(true);
        };
        const closeDropdownPopover = () => {
            setDropdownPopoverShow(false);
        };
    return (
        <>
            <a
                className="text-blueGray-500"
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
                <a className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100 cursor-pointer"
                    }
                    onClick={(e) => {closeDropdownPopover(); props.edit(props.cardOnDemand)}}
                >
                    <i className="mr-2 fas fa-edit"></i> Editar
                </a>
                <a className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100 cursor-pointer"
                    }
                    onClick={(e) => {closeDropdownPopover(); props.remove(props.cardOnDemand)}}
                >
                    <i className="mr-2.5 fas fa-trash"></i> Remover
                </a>
            </div>
        </>
    );
}