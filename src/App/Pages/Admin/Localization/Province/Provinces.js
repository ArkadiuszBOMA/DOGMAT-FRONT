import React from 'react'

import Table from "./Table/Table"
import videoMain from "../../../../../assets/video/bac1.mp4";

export const Provinces = () => {

	return (
		<div>
			<video className="video" src={videoMain} autoPlay loop muted />
			<Table/>
		</div>
	)
}
export default Provinces
