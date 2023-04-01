import React from 'react'

import videoMain from "../../../../../assets/video/bac1.mp4";
import Table from "./Table/Table"

export const Voivodeship = () => {

	return (
		<div>
			<video className="video" src={videoMain} autoPlay loop muted />
			<Table/>
		</div>
	)
}
export default Voivodeship
