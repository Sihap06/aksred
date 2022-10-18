import React from 'react'
import Header from '../template/Header'
import SidePanel from '../template/SidePanel'
import UserDropdown from '../template/UserDropdown'
import HeaderLogo from '../template/HeaderLogo'
import MobileNav from '../template/MobileNav'
import HorizontalNav from '../template/HorizontalNav'
import View from '../../views'

const HeaderActionsStart = () => {
	return (
		<>
			<HeaderLogo />
			<MobileNav />
		</>
	)
}

const HeaderActionsEnd = () => {
	return (
		<>
			<SidePanel />
			<UserDropdown hoverable={false} />
		</>
	)
}

const SimpleLayout = () => {
	return (
		<div className="app-layout-simple flex flex-auto flex-col min-h-screen">
			<div className="flex flex-auto min-w-0">
				<div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
					<Header
						container
						className="shadow dark:shadow-2xl"
						headerStart={<HeaderActionsStart />}
						headerMiddle={<HorizontalNav />}
						headerEnd={<HeaderActionsEnd />}
					/>
					<View pageContainerType="contained" />
				</div>
			</div>
		</div>
	)
}

export default SimpleLayout
