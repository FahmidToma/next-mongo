import React, { ChangeEvent, FormEvent } from 'react';
import Modal from 'react-modal';



//const customStyles = {
//  content: {
//    top: '37%',
//    left: '50%',
//    right: 'auto',
//    bottom: 'auto',
//    marginRight: '-50%',
//    transform: 'translate(-50%, -50%)',
//    width: '25%',
//  },
//};



interface FolderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  folderName: string;
  setFolderName: (name: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  error: string | undefined;
}

const FolderModal: React.FC<FolderModalProps> = ({ isOpen, onRequestClose, folderName, setFolderName, handleSubmit, error }) => {
    
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className=" max-w-md md:max-w-lg mx-auto "
      shouldCloseOnOverlayClick={false}
      contentLabel="Add Folder Modal"
      ariaHideApp={false}
    >
      <div className='w-11/12 bg-slate-300 top-20 max-w-md mx-auto md:max-w-lg  p-3 md:p-4'>
      <h2 className="mb-3">Add Folder  {`&{folderName}`}</h2> 
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Folder Name"
          className="p-2 border border-gray-400 w-full focus:outline-none"
          value={folderName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFolderName(e.target.value)}
        />
        {error && <p className='text-red-500'>{error}</p>}
        <div className='flex justify-end gap-2'>
          <button
            type="button"
            className="px-2 py-1  border border-gray-400 hover:bg-gray-500 hover:text-white"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button type="submit" className="px-2 py-1  bg-blue-500 text-white hover:bg-blue-600">
            Create
          </button>
        </div>
      </form>
      </div>
    </Modal>
  );
};

export default FolderModal;
