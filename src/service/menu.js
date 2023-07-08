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
                                childName: 'Dashboard',
                                routeName: 'home'
                            },
                            {
                                childName: 'Nhân Viên',
                                routeName: 'employee-list'
                            },
                            {
                                childName: 'Thai Sản',
                                routeName: 'maternity-employee'
                            },
                            {
                                childName: 'Nhật ký làm thêm',
                                routeName: 'overtime-log'
                            },
                            {
                                childName: 'Phụ thuộc',
                                routeName: 'dependent-list'
                            },
                            {
                                childName: 'Chấm công',
                                routeName: 'attendance-employee'
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

    static menuListEmp() {
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
                                childName: 'Chấm công',
                                routeName: 'attendance-employee'
                            }
                        ]
                    }
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
            {
                name: 'Employee View',
                routeName: 'emp-information',
            },
            {
                name: 'Danh sách vị trí',
                routeName: 'position',
            },
            {
                name: 'Danh sách trình độ',
                routeName: 'level',
            },
            {
                name: 'Danh sách phụ cấp',
                routeName: 'allowance',
            },
            {
                name: 'Danh sách hợp đồng',
                routeName: 'employeeContract',
            },
            {
                name: 'Quản lí thời gian làm việc',
                routeName: 'configWorkDay',
            },
            {
                name: 'Danh sách phụ cấp theo phòng ban',
                routeName: 'departmentAllowance',
            }

        ]
    }

    static profileEmpMenu() {
        return [
            {
                name: 'information',
                routeName: 'emp-information',
            },
            {
                name: 'degree',
                routeName: 'emp-degree',
            },
            {
                name: 'allowance',
                routeName: 'emp-allowance',
            },
            {
                name: 'department',
                routeName: 'emp-department',
            },
            {
                name: 'skill',
                routeName: 'emp-skill',
            },
            {
                name: 'experience',
                routeName: 'emp-experience',
            },
            {
                name: 'contract',
                routeName: 'emp-contract',
            },
            {
                name: 'dependant',
                routeName: 'emp-dependant',
            }
        ]
    }
}