import React from 'react'

type PropsType = {
  children: React.ReactNode
}

type StatesType = {
  hasError: boolean
}

type ErrorInfoType = {
  componentStack: string
}

class ErrorBoundary extends React.Component<PropsType, StatesType> {
  constructor(props: PropsType) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfoType) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <>Error</>
    }

    return <>{this.props.children}</>
  }
}

export default ErrorBoundary
