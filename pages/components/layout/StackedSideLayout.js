import React from 'react'
import Header from '../template/Header'
import SidePanel from '../template/SidePanel'
import UserDropdown from '../template/UserDropdown'
import MobileNav from '../template/MobileNav'
import StackedSideNav from '../template/StackedSideNav'
import View from '../../views'

const HeaderActionsStart = () => {
	return (
		<>
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

const StackedSideLayout = () => {
	return (
		<div className="app-layout-stacked-side flex flex-auto flex-col">
			<div className="flex flex-auto min-w-0">
				<StackedSideNav />
				<div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
					<Header
						className="shadow dark:shadow-2xl"
						headerStart={<HeaderActionsStart />}
						headerEnd={<HeaderActionsEnd />}
					/>
					<div className="h-full flex flex-auto flex-col">
						<View />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StackedSideLayout