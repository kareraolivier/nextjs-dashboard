// 'use client';
import { Dialog, Transition } from '@headlessui/react';
import { deleteInvoice } from '../lib/actions';
import { useDialogContext } from '@/context';

const Dialogue = () => {
  const { id, isOpen, setIsOpen } = useDialogContext();
  console.log(id);
  const hundleDelete = () => deleteInvoice(id);

  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(!isOpen)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-xl bg-blue-600/10 p-6 text-white backdrop-blur-2xl">
                <Dialog.Title
                  as="h3"
                  className="py-3 text-lg font-medium leading-6"
                >
                  Delete invoice
                </Dialog.Title>
                <Dialog.Description>
                  This will permanently delete your invoice
                </Dialog.Description>

                <p className="py-3">
                  Are you sure you want to delete your invoice? All of your data
                  will be permanently removed. This action cannot be undone.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={hundleDelete}
                    className="text-lachs-200 flex justify-center gap-2  rounded-md bg-red-700 px-4 py-2 shadow-sm"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-lachs-200 flex justify-center gap-2  rounded-md bg-gray-400 px-4 py-2 shadow-sm"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default Dialogue;
