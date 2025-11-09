import {ThemeConfig} from 'antd';

export interface CustomThemeConfig extends ThemeConfig {
    name: 'light' | 'dark';
}

export type ThemeMode = 'light' | 'dark';

const lightTheme: CustomThemeConfig = {
    name: 'light',
    token: {
        colorPrimary: '#1890ff',
        colorBgBase: '#ffffff',
        colorTextBase: '#000000',
        colorBgContainer: '#fafafa',
        colorBorder: '#d9d9d9',
        borderRadius: 6,

        colorPrimaryBg: '#f0f8ff',
        colorPrimaryBorder: '#91d5ff',
    },
    components: {
        Input: {
            colorBgContainer: '#ffffff',
            hoverBorderColor: '#40a9ff',
            activeBorderColor: '#1890ff',
        },
        Button: {
            colorPrimary: '#1890ff',
            colorPrimaryHover: '#40a9ff',
        },
    },
};

const darkTheme: CustomThemeConfig = {
    name: 'dark',
    token: {
        colorPrimary: '#177ddc',
        colorBgBase: '#141414',
        colorTextBase: '#ffffff',
        colorBgContainer: '#1f1f1f',
        colorBorder: '#434343',
        borderRadius: 6,

        colorPrimaryBg: '#111d2c',
        colorPrimaryBorder: '#153450',
    },
    components: {
        Input: {
            colorBgContainer: '#1f1f1f',
            hoverBorderColor: '#177ddc',
            activeBorderColor: '#177ddc',
            colorText: '#ffffff',
        },
        Button: {
            colorPrimary: '#177ddc',
            colorPrimaryHover: '#3c9ae8',
        },
    },
};
export const themes: Record<ThemeMode, CustomThemeConfig> = {
    light: lightTheme,
    dark: darkTheme,
};
