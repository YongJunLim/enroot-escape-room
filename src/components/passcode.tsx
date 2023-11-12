import { BaseSyntheticEvent, KeyboardEvent, useRef, useState, useMemo, useEffect } from 'react';
import { usePasscode } from "react-headless-passcode";
import useSWR from 'swr'

interface PasscodeProps {
  passcodeCount: number,
  puzzleId: number,
  puzzleName: string,
  isCorrectPasscode: boolean,
  setIsCorrectPasscode: Dispatch<SetStateAction<boolean>>
}

export default function Passcode(props: PasscodeProps) { 
  const { passcodeCount, puzzleId, puzzleName, isCorrectPasscode, setIsCorrectPasscode } = props;
  const { passcode, getEventHandlers, refs, isComplete } = usePasscode({
    count: passcodeCount
  });
  const passcodeString: string = passcode.join('')
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const checkPasscodeSWR = useSWR(
    () => isComplete ? `/api/checkPasscode?puzzleId=${puzzleId}&puzzleName=${puzzleName}&passcode=${passcodeString}`: null,
    fetcher
  );

  function checkPasscode(passcodeString: string) {
    if (checkPasscodeSWR.error) {
      console.error(checkPasscodeSWR.error);
    }
    if (checkPasscodeSWR.data && checkPasscodeSWR.data.success) {
      return true;
    } else {
      return false;
    }
  }
  
  const correctPasscode = checkPasscode(passcodeString)

  useEffect(() => {
    if (correctPasscode) {
      setIsCorrectPasscode(true)
      fetch('/api/submitTimestamp', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(
              { puzzleId: puzzleId,
                puzzleName: puzzleName
              }
            ),
        })
            .then((response) => response.json())
            .then((data) => {
              if (data.success === false) {
                alert("The passcode was correct but the submitted time was not recorded. Try entering the passcode again.")
              }
            })
            .catch((error) => {
                console.error(error);
                alert("The passcode was correct but the submitted time was not recorded. Try entering the passcode again.")
            });
    }
  }, [correctPasscode])

  return (
    <>
      {passcode.map((value: string | number, index: number) => {
        const { onChange, onFocus, onKeyUp, onKeyDown } = getEventHandlers(index);
        return (
          <input
            className={`w-14 h-14 rounded-md bg-gray-100 ${isComplete && correctPasscode ? 'border-emerald-500 border-2 shadow-emerald-700' : checkPasscodeSWR.isLoading ? 'border-amber-500 border shadow-amber-700' : isComplete ? 'border-red-500 border-2 shadow-red-700' : 'shadow-slate-700'} text-gray-950 text-center font-bold shadow-inner m-1`}
            ref={(el) => el && (refs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            pattern="\d{1}"
            min={0}
            max={9}
            key={`index-${index}`}
            readOnly={correctPasscode ? true : undefined}
            onChange={correctPasscode ? undefined : onChange}
            onFocus={correctPasscode ? undefined : onFocus}
            onKeyUp={correctPasscode ? undefined : onKeyUp}
            onKeyDown={correctPasscode ? undefined : onKeyDown}
          />
        );
      })}
    </>
  );
};