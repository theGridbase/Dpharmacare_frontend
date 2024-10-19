import type {
    ThemeConfig
} from 'antd'


const theme: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: '#008080',
    },
    components: {
        Select: {
            /* here is your component tokens */
            optionFontSize: 16,
        },
        Table: {
            headerBg: '#F0F7F7',
            headerColor: '#696677',
            headerBorderRadius: 15
        },
        Popover: {
            /* here is your component tokens */
            minWidth: 0,
            width: 133
        },
    },
}

export default theme