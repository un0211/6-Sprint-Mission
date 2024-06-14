import { SignupData } from "@/interfaces/Auth.interface";
import styles from "./AuthForm.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { SignupPasswordInput, SignupTextInput } from "./Input";

function SignupForm() {
  const [hasAllInput, setHasAllInput] = useState(false);
  const {
    register,
    formState: { errors, dirtyFields },
    watch,
    setError,
    clearErrors,
  } = useForm<SignupData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordCheck: "",
    },
  });

  useEffect(() => {
    const checkPasswordMatch = () => {
      if (
        watch("passwordCheck") &&
        watch("password") !== watch("passwordCheck")
      ) {
        setError("passwordCheck", {
          type: "password-mismatch",
          message: "비밀번호가 일치하지 않습니다.",
        });
      } else {
        clearErrors("passwordCheck");
      }
    };
    checkPasswordMatch();
    // Q3. 아래 식처럼 계산이 있으면 useEffect 성능에 안좋을까요? 개선 방법 있을까요?
  }, [watch("password"), watch("passwordCheck"), clearErrors, setError, watch]);

  useEffect(() => {
    /* Q1.
     * 성능 & 유저경험을 위해 useForm에서 mode를 "onBlur"로 설정했습니다.
     * (비밀번호 확인의 경우에만 바로 반영할 수 있도록 watch를 사용해 따로 검사했습니다.)
     * 에러는 바로 반영이 되지 않는데, dirtyFields는 바로 반영이 되어서,
     * 회원가입 페이지에서 이메일을 가장 마지막에 입력하는 경우나, 로그인 페이지 등에서
     * 아직 입력한 값이 조건을 만족하지 않았는데도 버튼이 일시적으로 활동화되는 문제가 있습니다.
     * 어떻게 개선하면 좋을까요?
     */
    const noError = Object.keys(errors).length === 0;
    const allFilled = Object.keys(dirtyFields).length === 4;
    setHasAllInput(noError && allFilled);
  }, [
    errors,
    dirtyFields,
    Object.keys(errors).length === 0,
    Object.keys(dirtyFields).length === 4,
  ]);

  return (
    <form className={styles.form}>
      <SignupTextInput
        id="email"
        error={errors?.email?.message}
        register={register}
      />
      <SignupTextInput
        id="nickname"
        error={errors?.nickname?.message}
        register={register}
      />
      <SignupPasswordInput
        id="password"
        error={errors?.password?.message}
        register={register}
      />
      <SignupPasswordInput
        id="passwordCheck"
        error={errors?.passwordCheck?.message}
        register={register}
      />
      <button className={styles.button} type="button" disabled={!hasAllInput}>
        로그인
      </button>
    </form>
  );
}

export default SignupForm;
