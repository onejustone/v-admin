/* eslint-disable */
const data = {
    "status": "success",
    "data": {
      "project": {
        "project_id": "debug3",
        "name": "测试二",
        "user_id": "debug1",
        "category_id": "debug2",
        "status_id": "debug6",
        "prev_status_id": 0,
        "description": null,
        "budget_self_source": "",
        "budget_self": 0,
        "budget_total": 0,
        "end_time": null,
        "begin_time": null,
        "identifier": "",
        "column1": "萨拉丁解放路",
        "column2": "",
        "column3": "",
        "column4": "",
        "column5": [

        ],
        "column6": [

        ],
        "column7": null,
        "column8": null,
        "column9": null,
        "column10": null,
        "column11": null,
        "column12": null,
        "column13": null,
        "column14": null,
        "column15": null,
        "column16": null,
        "column17": null,
        "column18": null,
        "column19": null,
        "column20": null,
        "column21": "",
        "column22": null,
        "column23": null,
        "column24": null,
        "column25": null,
        "column26": null,
        "column27": null,
        "column28": null,
        "column29": null,
        "column30": null,
        "display_buttons": [
          "user_view",
          "user_edit"
        ],
        "available_status_list": [

        ],
        "audit_data": {
          "evaluations": [

          ],
          "logs": [

          ],
          "allow_submit_evaluation": false
        },
        "category": {
          "category_id": "debug2",
          "name": "项目",
          "permission": {
            "user": {
              "allow": true,
              "create": true,
              "create_max": 10,
              "create_basic_project": {
                "category_id": "debug1",
                "status_id": "debug4",
                "user_self_create": true
              },
              "filter": [
                {
                  "type": "self_create"
                }
              ]
            },
            "manager": {
              "allow": true,
              "create": false
            }
          },
          "init_status_id": "debug6",
          "logic_columns": [
            {
              "name": "项目名称",
              "column": "name",
              "type": "field",
              "field_id": "debug50",
              "form_id": "debug8"
            },
            {
              "name": "项目申请单位",
              "column": "column1",
              "type": "text",
              "pipes": [
                {
                  "type": "field",
                  "basic_project": true,
                  "field_id": "debug1"
                }
              ],
              "run_once": true
            },
            {
              "name": "申请单位地址",
              "column": "column2",
              "type": "text",
              "pipes": [
                {
                  "type": "field",
                  "basic_project": true,
                  "field_id": "debug37"
                }
              ],
              "run_once": true
            },
            {
              "name": "申请单位电话",
              "column": "column3",
              "type": "text",
              "pipes": [
                {
                  "type": "field",
                  "basic_project": true,
                  "field_id": "debug33"
                }
              ],
              "run_once": true
            },
            {
              "name": "项目申请邮件",
              "column": "column4",
              "type": "field",
              "field_id": "debug35",
              "category_id": "debug1",
              "pipes": [
                {
                  "type": "field",
                  "basic_project": true,
                  "field_id": "debug35"
                }
              ],
              "run_once": true
            },
            {
              "name": "国家",
              "column": "column5",
              "type": "field",
              "field_id": "debug58",
              "form_id": "debug8"
            },
            {
              "name": "项目领域",
              "column": "column6",
              "type": "field",
              "field_id": "debug60",
              "form_id": "debug8"
            },
            {
              "name": "申请单位简介",
              "column": "column21",
              "type": "text",
              "pipes": [
                {
                  "type": "field",
                  "basic_project": true,
                  "field_id": "debug16"
                }
              ],
              "run_once": true
            }
          ],
          "enable": true,
          "display_config": {
            "audit": true,
            "create_button": {
              "name": "申请项目"
            }
          },
          "user_plugin": {
            "identifier": {
              "template": "{date|Y}-{custom_country}-{custom_category}-{serial_number|3}"
            }
          },
          "user_tabs": [
            {
              "id": "user_all",
              "name": "１、所有",
              "filter": [
                {
                  "type": "self_create"
                }
              ],
              "logic_columns": [
                "name",
                "column1",
                "column5",
                "column6"
              ],
              "column_width": {
                "name": 150
              }
            }
          ],
          "manager_tabs": [
            {
              "id": "audit",
              "name": "１、待审核",
              "filter": [
                {
                  "type": "status",
                  "status_ids": [
                    7
                  ]
                }
              ],
              "logic_columns": [
                "name",
                "column1",
                "column5",
                "column6"
              ],
              "column_width": {
                "name": 150
              }
            },
            {
              "id": "need_improve",
              "name": "２、待优化",
              "filter": [
                {
                  "type": "status",
                  "status_ids": [
                    8
                  ]
                }
              ],
              "logic_columns": [
                "name",
                "column1",
                "column5",
                "column6"
              ],
              "column_width": {
                "name": 150
              }
            },
            {
              "id": "waiting_evaluate",
              "name": "３、待评估",
              "filter": [
                {
                  "type": "status",
                  "status_ids": [
                    9
                  ]
                }
              ],
              "logic_columns": [
                "name",
                "column1",
                "column5",
                "column6"
              ],
              "column_width": {
                "name": 150
              }
            },
            {
              "id": "ok",
              "name": "４、已立项",
              "filter": [
                {
                  "type": "status",
                  "status_ids": [
                    10
                  ]
                }
              ],
              "logic_columns": [
                "name",
                "column1",
                "column5",
                "column6"
              ],
              "column_width": {
                "name": 150
              }
            },
            {
              "id": "kill",
              "name": "５、未通过",
              "filter": [
                {
                  "type": "status",
                  "status_ids": [
                    11
                  ]
                }
              ],
              "logic_columns": [
                "name",
                "column1",
                "column5",
                "column6"
              ],
              "column_width": {
                "name": 150
              }
            }
          ],
          "logic_buttons": [
            {
              "id": "user_view",
              "name": "查看",
              "owner": "user",
              "conditions": [

              ],
              "type": "view"
            },
            {
              "id": "user_edit",
              "name": "编辑",
              "owner": "user",
              "conditions": [
                {
                  "type": "status",
                  "status_ids": [
                    6,
                    8
                  ]
                }
              ],
              "type": "edit"
            },
            {
              "id": "manager_view",
              "name": "查看",
              "owner": "manager",
              "role_ids": [
                1,
                3,
                2,
                4
              ],
              "conditions": [

              ],
              "type": "view"
            }
          ],
          "finance_config": {
            "title": {
              "fix_tree": [
                {
                  "name": "项目直接费用",
                  "level": 1,
                  "children": [

                  ]
                },
                {
                  "name": "项目执行费用",
                  "level": 1,
                  "children": [

                  ]
                },
                {
                  "name": "项目管理费用",
                  "level": 1,
                  "children": [

                  ]
                }
              ],
              "level_range": {
                "fix": [
                  1,
                  1
                ],
                "leaf": [
                  2,
                  3
                ],
                "custom": [
                  2,
                  3
                ]
              }
            },
            "total_amount_mode": "summary",
            "table_columns": [
              {
                "type": "fix_field",
                "name": "编号",
                "key": "code"
              },
              {
                "type": "fix_field",
                "name": "科目",
                "key": "title"
              },
              {
                "type": "fix_field",
                "name": "备注",
                "key": "comment"
              },
              {
                "type": "extend_field",
                "name": "资金支付渠道",
                "extend_field_id": "payMethod"
              },
              {
                "type": "fix_field",
                "name": "申报金额（本组织支付）",
                "key": "applyAmount"
              },
              {
                "type": "fix_field",
                "name": "申报金额（合作伙伴支付）",
                "key": "selfAmount"
              },
              {
                "type": "fix_field",
                "name": "预算合计",
                "key": "totalAmount"
              },
              {
                "type": "fix_field",
                "name": "明细",
                "key": "inventories"
              }
            ],
            "extend_fields": [
              {
                "extend_field_id": "payMethod",
                "type": "choice",
                "name": "资金支付渠道",
                "config": {
                  "type": "select",
                  "options": [
                    {
                      "option_id": 1,
                      "name": "A"
                    },
                    {
                      "option_id": 2,
                      "name": "B"
                    }
                  ]
                }
              }
            ],
            "budget_config": {
              "period": 3,
              "begin_time": "2018-01-01 00:00:00",
              "end_time": "2018-12-01 00:00:00",
              "description": "<b>填写说明</b><br/> <a href='http://ov34zcid1.bkt.clouddn.com/userfile/helper/%E9%A2%84%E7%AE%97%E6%83%85%E5%86%B5%E8%A1%A8.xlsx' target='_blank'>点击下载《预算情况表》查看</a>",
              "frontend_status_right": [
                {
                  "status_id": "debug6",
                  "right": "write"
                },
                {
                  "status_id": "debug7",
                  "right": "read"
                },
                {
                  "status_id": "debug8",
                  "right": "write"
                },
                {
                  "status_id": "debug9",
                  "right": "read"
                },
                {
                  "status_id": "debug10",
                  "right": "read"
                },
                {
                  "status_id": "debug11",
                  "right": "read"
                }
              ]
            }
          },
          "attachment_config": null,
          "status_list": [
            {
              "status_id": "debug6",
              "order": 1,
              "workflow_setting": [
                {
                  "action": "save",
                  "name": "保存草稿",
                  "owner": "user",
                  "skip_validate": true
                },
                {
                  "action": "post",
                  "name": "提交申请",
                  "owner": "user",
                  "status_id": "debug7",
                  "attention": {
                    "wording": "提交申请后项目进入待审核状态，确认提交吗？",
                    "yes": "确认",
                    "no": "取消"
                  },
                  "notification": {
                    "type": "event",
                    "event": "form_submited",
                    "event_id": "event_1"
                  }
                },
                {
                  "action": "manager_save",
                  "name": "保存",
                  "owner": "manager",
                  "role_id": "debug1",
                  "skip_validate": false
                }
              ],
              "audit_setting": null,
              "name": null,
              "view_layout_id": null,
              "edit_layout_id": null
            },
            {
              "status_id": "debug7",
              "order": 2,
              "workflow_setting": [

              ],
              "audit_setting": {
                "result_mapping": [
                  {
                    "result": "pending",
                    "to_status_id": null,
                    "tips": "仅评论，该项目会维持在初筛阶段"
                  },
                  {
                    "result": "pass",
                    "to_status_id": "debug9",
                    "tips": "通过后，该项目将进入待优化阶段"
                  },
                  {
                    "result": "trunback",
                    "to_status_id": "debug8",
                    "tips": "驳回修改后，申报机构可以根据优化建议修改项目"
                  },
                  {
                    "result": "kill",
                    "to_status_id": "debug11",
                    "tips": "拒绝申请，该项目将被终止"
                  }
                ],
                "role_ids": [
                  1
                ]
              },
              "name": null,
              "view_layout_id": null,
              "edit_layout_id": null
            },
            {
              "status_id": "debug8",
              "order": 3,
              "workflow_setting": [
                {
                  "action": "save",
                  "name": "保存草稿",
                  "owner": "user",
                  "skip_validate": true
                },
                {
                  "action": "post",
                  "name": "提交申请",
                  "owner": "user",
                  "status_id": "debug9",
                  "attention": {
                    "wording": "提交申请后项目进入立项评估阶段，项目信息不可再修改，确认提交吗？",
                    "yes": "确认",
                    "no": "取消"
                  },
                  "notification": {
                    "type": "event",
                    "event": "form_submited",
                    "event_id": "event_2"
                  }
                },
                {
                  "action": "manager_save",
                  "name": "保存",
                  "owner": "manager",
                  "role_id": "debug1",
                  "skip_validate": false
                }
              ],
              "audit_setting": null,
              "name": null,
              "view_layout_id": null,
              "edit_layout_id": null
            },
            {
              "status_id": "debug9",
              "order": 4,
              "workflow_setting": [

              ],
              "audit_setting": {
                "result_mapping": [
                  {
                    "result": "pending",
                    "to_status_id": null,
                    "tips": "仅评论，该项目会维持在立项评估阶段"
                  },
                  {
                    "result": "pass",
                    "to_status_id": "debug10",
                    "tips": "通过后，项目立项，项目进入实施阶段"
                  },
                  {
                    "result": "trunback",
                    "to_status_id": "debug8",
                    "tips": "驳回修改后，申报机构可以根据审批意见修改项目"
                  },
                  {
                    "result": "kill",
                    "to_status_id": "debug11",
                    "tips": "拒绝申请，项目申请将被终止"
                  }
                ],
                "role_ids": [
                  1
                ]
              },
              "name": null,
              "view_layout_id": null,
              "edit_layout_id": null
            },
            {
              "status_id": "debug10",
              "order": 5,
              "workflow_setting": [

              ],
              "audit_setting": null,
              "name": null,
              "view_layout_id": null,
              "edit_layout_id": null
            },
            {
              "status_id": "debug11",
              "order": 6,
              "workflow_setting": [

              ],
              "audit_setting": null,
              "name": null,
              "view_layout_id": null,
              "edit_layout_id": null
            }
          ]
        }
      },
      "forms": [
        {
          "form_id": "debug8",
          "items": [
            {
              "item_id": "debug15",
              "values": [
                {
                  "field_id": "debug50",
                  "value": "测试二"
                },
                {
                  "field_id": "debug51",
                  "value": [

                  ]
                },
                {
                  "field_id": "debug58",
                  "value": [

                  ]
                },
                {
                  "field_id": "debug60",
                  "value": [

                  ]
                },
                {
                  "field_id": "debug61",
                  "value": [

                  ]
                },
                {
                  "field_id": "debug62",
                  "value": [

                  ]
                }
              ]
            }
          ]
        },
        {
          "form_id": "debug9",
          "items": [
            {
              "item_id": "debug16",
              "values": [

              ]
            }
          ]
        },
        {
          "form_id": "debug10",
          "items": [
            {
              "item_id": "debug17",
              "values": [

              ]
            }
          ]
        },
        {
          "form_id": "debug11",
          "items": [
            {
              "item_id": "debug18",
              "values": [

              ]
            }
          ]
        },
        {
          "form_id": "debug12",
          "items": [
            {
              "item_id": "debug19",
              "values": [
                {
                  "field_id": "debug74",
                  "value": [

                  ]
                },
                {
                  "field_id": "debug75",
                  "value": [

                  ]
                },
                {
                  "field_id": "debug76",
                  "value": [

                  ]
                }
              ]
            }
          ]
        },
        {
          "form_id": "debug13",
          "items": [
            {
              "item_id": "debug20",
              "values": [

              ]
            }
          ]
        },
        {
          "form_id": "debug15",
          "items": [
            {
              "item_id": "debug21",
              "values": [

              ]
            }
          ]
        },
        {
          "form_id": "debug16",
          "items": [
            {
              "item_id": "debug22",
              "values": [

              ]
            }
          ]
        },
        {
          "form_id": "debug19",
          "items": [
            {
              "item_id": "debug23",
              "values": [
                {
                  "field_id": "debug98",
                  "value": [

                  ]
                }
              ]
            }
          ]
        },
        {
          "form_id": "debug20",
          "items": [
            {
              "item_id": "debug24",
              "values": [

              ]
            }
          ]
        },
        {
          "form_id": "21",
          "items": [
            {
              "item_id": "debug25",
              "values": [
                {
                  "field_id": "debug100",
                  "value": [

                  ]
                }
              ]
            }
          ]
        }
      ],
      "subs": [

      ]
    }
  }

export {
  data
}