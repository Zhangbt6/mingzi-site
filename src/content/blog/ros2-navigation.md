---
title: ROS2 Navigation2 踩坑记录
description: 记录在 ROS2 Humble 上使用 Navigation2 进行移动机器人导航时遇到的各种问题与解决方案。
pubDate: "2025-01-20"
tags: [robotics, ros2, navigation, control]
categories: [Tech]
excerpt: 总结 ROS2 Navigation2 在实际机器人部署中的几个典型坑：坐标系变换、costmap 更新、 planner 选择等。
cover: /assets/spark/banner-1.jpg
---

# ROS2 Navigation2 踩坑记录

部署 ROS2 Humble 的 Navigation2 栈时遇到几个典型问题，记录一下供后人避坑。

## 1. 坐标系变换混乱

机器人启动时 `robot_state_publisher` 和 `nav2_transformer` 的 frame 名称不匹配导致定位漂移。

**解决方案**：统一使用 `map -> odom -> base_link` 三层树结构，确保各节点 frame 名称一致。

## 2. Costmap 不更新

激光雷达数据正常，但 costmap 始终是静态的——原因是 ` lifecycle_manager` 启动顺序不对。

**解决方案**：确保 sensor 相关的 `costmap_filter` 在 planner 之前完成初始化。

## 3. 全局路径规划器选择

默认的 `NavFn planner` 在复杂环境下表现不佳，换成 `Smac Planner` 后效果好很多。

```yaml
planner_server:
  ros__parameters:
    planner_plugin: smac_planner/SmacPlanner
```

后续继续补充更多踩坑经验...
