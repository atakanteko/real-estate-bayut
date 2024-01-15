import { ThemeConfig } from 'antd'

export const boToken: ThemeConfig = {
    token: {
        fontFamily: 'Roboto',
        colorPrimary: '#1C3988'
    },
    components: {
        Button: {
            colorBgContainer: '#1C3988',
            colorText: '#fff',
            colorPrimaryHover: '#fff',
            borderRadius: 4,
        },
        Select: {
            colorBorder: '#141B2D',
        },
        Card: {
            padding: 12
        }
    }
}