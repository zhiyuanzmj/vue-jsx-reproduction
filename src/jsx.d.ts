declare module 'vue' {
  interface HTMLAttributes {
    vPermission?: string
    vLoading?: boolean
  }
  // How can i customize the props of the component?
  interface ReservedProps {
    vPermission?: string
    vLoading?: boolean
  }
}

export {}