import React, { ChangeEvent, useRef } from "react";
import Button from "../../atomos/Button/Button";

interface UserProfileProps {
  imageName: string;
  rounded?: boolean;
  imageType?: string;
  changeButtonName?: string;
  deleteButtonName?: string;
  onImageChange: (file: File | null) => void;
  onPictureChange: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  imageName,
  rounded = true,
  imageType = "image/*",
  changeButtonName = "Change picture",
  deleteButtonName = "Delete picture",
  onImageChange,
  onPictureChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    onImageChange(file);
  };

  const handlePictureChange = () => {
    // Lógica para manejar el cambio de imagen
    onPictureChange();
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
      <img
        className={`object-cover w-40 h-40 p-1 ${
          rounded ? "rounded-full" : "rounded-lg"
        } ring-2 ring-teal-500 dark:ring-teal-500`}
        src={imageName}
        alt="Bordered avatar"
      />

      <div className="flex flex-col space-y-5 sm:ml-8">
        <Button
          variant="primary"
          className="py-3.5 px-7 text-base font-medium rounded-lg"
          onClick={triggerFileInput}
        >
          {changeButtonName}
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept={imageType}
          className="hidden"
          onChange={handleFileChange}
        />
        <Button
          variant="secondary"
          className="py-3.5 px-7 text-base font-medium rounded-lg"
          onClick={handlePictureChange}
        >
          {deleteButtonName}
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
