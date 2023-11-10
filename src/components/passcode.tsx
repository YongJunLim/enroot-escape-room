import { BaseSyntheticEvent, KeyboardEvent, useRef, useState, useMemo } from 'react';
import { usePasscode } from "react-headless-passcode";

interface PasscodeProps {
  passcodeCount: number
}

function checkPasscode(passcodeString: string) {
  if (passcodeString === "1234") {
    return true;
  } else {
    return false;
  }
}

export default function Passcode(props: PasscodeProps) { 
  const { passcodeCount } = props;
  const { passcode, getEventHandlers, refs, isComplete } = usePasscode({
    count: 4
  });
  const passcodeString: string = passcode.join('')
  const correctPasscode = checkPasscode(passcodeString)

  return (
    <>
      {passcode.map((value: string | number, index: number) => {
        const { onChange, onFocus, onKeyUp, onKeyDown } = getEventHandlers(index);
        return (
          <input
            className={`w-14 h-14 rounded-md bg-gray-100 ${isComplete && correctPasscode ? 'border-emerald-500 border-2 shadow-emerald-700' : isComplete ? 'border-red-500 border-2 shadow-red-700' : 'shadow-slate-700'} text-gray-950 text-center font-bold shadow-inner m-1`}
            ref={(el) => el && (refs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            pattern="\d{1}"
            min={1}
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