export default class menu {
    static menuList() {
        return [
            {
                id: 1,
                name: 'menu',
                items: [
                    {
                        itemName: 'Dashboards',
                        isShow: true,
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
                        itemName: 'Apps',
                        isShow: false,
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
        ]
    }
}