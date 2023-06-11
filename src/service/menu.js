export default class menu {
    static menuList() {
        return [
            {
                id: 1,
                name: 'menu',
                items: [
                    {
                        iconName: 'dashboardIcon',
                        itemName: 'Dashboards',
                        isShow: true,
                        isShowExpand: false,
                        children: [
                            {
                                childName: 'Analytics',
                                routeName: ''
                            },
                            {
                                childName: 'CRM',
                                routeName: ''
                            },
                            {
                                childName: 'Ecommerce',
                                routeName: ''
                            },
                            {
                                childName: 'Crypto',
                                routeName: ''
                            }
                        ]
                    },
                    {
                        iconName: 'managementItem',
                        itemName: 'Apps',
                        isShow: false,
                        isShowExpand: false,
                        children: [
                            {
                                childName: 'Chat',
                                routeName: ''
                            },
                            {
                                childName: 'Email',
                                routeName: ''
                            },
                            {
                                childName: 'Project',
                                routeName: ''
                            },
                            {
                                childName: 'Tasks',
                                routeName: ''
                            },
                            {
                                childName: 'OT Time',
                                routeName: ''
                            },
                            {
                                childName: 'Summary',
                                routeName: ''
                            }
                        ]
                    },
                ]
            }
        ]
    }

    static profileMenu() {
        return [
            {
                name: 'profile',
                routeName: 'empinfo',
            },
            {
                name: 'payroll',
                routeName: 'payroll',
            },
            {
                name: 'request ot',
                routeName: 'request-ot',
            },
            {
                name: 'request off',
                routeName: 'request-off',
            },
            {
                name: 'Danh sách nhân viên',
                routeName: 'hrempmanagement',
            },
            {
                name: 'Danh sách phòng ban',
                routeName: 'department',
            },
        ]
    }
}