import { ICollection } from './collections.types'
import Image from "next/legacy/image";
import { FC } from 'react'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return <Image alt={title} src={image} layout="fill" draggable={false} />
}

export default CollectionImage
