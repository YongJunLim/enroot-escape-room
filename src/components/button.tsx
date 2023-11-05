import Link from 'next/link'

interface ButtonProps {
  category: string,
  button_link: string,
  button_name: string
}

export default function Button(props: ButtonProps) {
  let button_colour: string
  if (props.category === "Christmas") {
    button_colour = "from-rose-500 to-red-600"
  } else if (props.category === "Halloween") {
    button_colour = "from-amber-500 to-orange-500"
  }
  return (
    <button
      className={`w-48 h-14 rounded-md flex items-center justify-center bg-gradient-to-r ${button_colour} text-gray-50 font-semibold shadow-lg p-2`}>
      <Link href={props.button_link}>
        {props.button_name}
      </Link>
    </button>
  )

}