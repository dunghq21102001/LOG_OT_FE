export default class menu {
    static menuList() {
        return [
            {
                id: 1,
                name: 'menu',
                items: [
                    {
                        itemName: 'Dashboards',
                        isShow: false,
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
                            }
                        ]
                    },
                ]
            }
        ]
    }
}