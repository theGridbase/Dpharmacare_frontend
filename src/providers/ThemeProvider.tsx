import {
    ConfigProvider
} from 'antd'

import theme from './configs/themeConfig'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <ConfigProvider theme={theme}>
        {children}
    </ConfigProvider>
} 