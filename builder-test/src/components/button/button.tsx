import Link from "next/link";


export default function Button(props: any) {
  return (
    <>
      <Link href={props.buttonLink} className="btn">
        {props.buttonText}
      </Link>
    </>
  )
}