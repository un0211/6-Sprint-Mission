import styles from "./AddForm.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import ImageInput from "@/components/common/ImageInput";
import { useRouter } from "next/router";

interface FormData {
  title: string;
  content: string;
  image?: File;
}

function AddForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleImageChange = (image: File) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image,
    }));
  };

  const handleImageDelete = () => {
    setFormData((prevFormData) => {
      delete prevFormData.image;
      return prevFormData;
    });
  };

  useEffect(() => {
    // NOTE - 기존에 로그인 되어있는지 확인
    if (!localStorage.getItem("accessToken")) {
      alert("로그인이 필요한 기능입니다!");
      router.replace("/login");
    }
  }, [router]);

  useEffect(() => {
    const checkFormFilled = () =>
      formData.title && formData.content ? true : false;
    setIsFormFilled(checkFormFilled());
  }, [formData.title, formData.content]);

  return (
    <form className={styles.form}>
      <header className={styles.header}>
        <h2 className={styles.title}>게시글 쓰기</h2>
        <button
          className={styles.button}
          type="submit"
          disabled={!isFormFilled}
        >
          등록
        </button>
      </header>

      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor="title">
          *제목
        </label>
        <input
          id="title"
          value={formData.title}
          placeholder="제목을 입력해주세요"
          type="text"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor="content">
          *내용
        </label>
        <textarea
          id="content"
          value={formData.content}
          placeholder="내용을 입력해주세요"
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor="image">
          이미지
        </label>
        <ImageInput
          name="image"
          onChange={handleImageChange}
          onDeleteClick={handleImageDelete}
        />
      </div>
    </form>
  );
}

export default AddForm;
