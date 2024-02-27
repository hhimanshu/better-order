import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NutritionLinkProps } from "../content-scripts/doordash/NutritionLink";
import NutritionSurfaceUI from "./NutritionSurface";
import "./index.css"

type NutritionDialogProps = NutritionLinkProps & {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const NuritionDialog = ({
  open,
  setOpen,
}: // menuItem,
// menuDescription,
NutritionDialogProps) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-x-hidden overflow-y-scroll rounded-lg bg-white px-4 pb-4 pt-5 shadow-xl transition-all">
                <NutritionSurfaceUI handleClose={handleClose} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
