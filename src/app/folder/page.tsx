'use client'

import { FormEvent, useEffect, useState } from "react";
import { MdKeyboardArrowRight, /*MdOutlineKeyboardArrowDown*/ } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import React from 'react';
import Modal from '@/components/Modal';
import { createFolder, deleteFolder, getFolders } from "@/lib/serverActions";

export interface Folder {
    _id: string,
    name: string,
    parent?: string | null,

}

const Folder = () => {
    const [click, setClick] = useState(false);
    const [folderName, setFolderName] = useState<string>('');
    const [folderNames, setFolderNames] = useState<Folder[]>([]);
    const [parentId, setParentId] = useState<string | null>(null);
    const [error, setError] = useState<string | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    const toggleModal = () => {
        setClick(!click);
    }

    //for fetching all the folders to show
    const fetchFolder = async () => {
        console.log("Getting folders----client");
        const result = await getFolders();
        console.log("Got the folders---client", result);
        setFolderNames(result);
        // setParentId(result.parent);
        // console.log(result.parent)
        setLoading(false);
    }

    useEffect(() => {
        fetchFolder();

    }, []);


    //for creating a new folder
    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //const data = { name };
        console.log(folderName);

        if (!folderName) {
            setError("Please enter a folder name");
            return;
        }

        try {
            //const parentId = folderNames.length == 0 ? null : folderNames[0]._id;
            //console.log(parentId);
             await createFolder(folderName, parentId);
            setFolderName('');

        } catch (error) {
            console.error("There is error creating folder", error);
        }

        //const result = await createFolder(name, parentId);
        toggleModal();
        await fetchFolder();

    }

    //handleNewFolder
    const handleNewFolder = (parentId: string | null) => {
        setParentId(parentId);
        //setFolderName(name);
        toggleModal();
    }

    //handle Delete
    const handleDelete = async (id: string) => {
        await deleteFolder(id);
        alert("Successfully deleted the item");
        fetchFolder();
    }

    const renderFolderStructure = (parentId: string | null) => {

        return folderNames
            .filter((folder) => folder.parent === parentId)
            .map((folder) => (
                <div key={folder._id} className="flex flex-col ">
                    <div className="flex justify-between group hover:bg-slate-100">
                        <div className="flex items-center space-x-1  p-2">
                            <MdKeyboardArrowRight />
                            <button>{folder.name}</button>
                            <button onClick={() => handleDelete(folder._id)}><RxCrossCircled className="opacity-0 group-hover:opacity-100 hover:bg-red-600 rounded-full hover:text-white" /></button>
                        </div>
                        <div className="flex items-center bg-slate-500 text-white gap-1 max-w-16 px-2 opacity-0 group-hover:opacity-100">
                            <GoPlus />
                            <button onClick={() => handleNewFolder(folder._id)}>New</button>
                        </div>
                    </div>
                    <div className="pl-5">{renderFolderStructure(folder._id)}</div>
                </div>
            ))
    }
    if (loading) return <p className="text-center text-2xl mt-10">Loading....</p>


    return <div className="text-center space-y-1 mt-2 " >
        <h1 className="text-xl font-semibold">Folder Structure Viewer</h1>
        <p className="text-gray-300">[Note: The new button is available when you expand the folder.]</p>
        <div className="bg-gray-200 font-semibold max-w-3xl mx-auto p-5">
            <p className="mb-5">Folder structure view</p>
            <div className=" max-w-16 mx-auto ">

                {/* <div className="flex items-center bg-slate-500 text-white gap-1 max-w-16 mx-auto p-1 m-5"> <GoPlus></GoPlus><button onClick={toggleModal}>new</button></div>*/}


                {
                    click && (

                        <Modal
                            isOpen={click}
                            onRequestClose={toggleModal}
                            folderName={folderName}
                            setFolderName={setFolderName}
                            handleSubmit={handleForm}
                            error={error}
                        />
                    )
                }
            </div>
            <div className='bg-gray-200 pb-5 h-[450px] overflow-y-auto'>


                {renderFolderStructure(null)}

            </div>
        </div>
    </div>
}

export default Folder;