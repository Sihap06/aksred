import React from 'react'
import appConfig from '../../configs/app.config'
import { REDIRECT_URL_KEY } from '../../constants/app.constant'
import { Navigate, Outlet, useLocation } from 'next/link'
import useAuth from '../../utils/hooks/useAuth'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {

	const { authenticated } = useAuth()

	const location = useLocation()

	if (!authenticated) {
		return <Navigate to={`${unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${location.pathname}`} replace />;
	}

	return <Outlet />
}

export default ProtectedRoute