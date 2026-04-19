---
title: AirSpark — 城市低空仿真平台
description: 基于 Unreal Engine 5.7 + AirSim 的城市低空多模态数据采集、任务生成与评测一体化平台，服务于具身智能研究。
date: 2026-04-01
tags: [robotics, uav, simulation, ue5, airsim, embodied-ai]
cover: /assets/spark/banner-1.jpg
links:
  repo: https://github.com/Zhangbt6/AirSpark
featured: true
status: active
---

## 项目定位

AirSpark 是一个面向城市低空任务的**数据、任务、评测一体化仿真平台**，基于 Unreal Engine 5.7 + AirSim 1.8.1 构建。

与现有平台的核心差异：UE5 Nanite+Lumen 照片级渲染 + 真实飞行器动力学 + 人物行为智能体 + VLN 基准测试，填补了"空地协同 + 具身智能评测"的学术空白。

## 技术架构

```
PythonClient (RPC)
    ↓
AirSim 插件 (C++)
  ├─ 多传感器：RGB / 深度 / 语义分割 / 光流 / 激光雷达
  ├─ 飞行器动力学：四旋翼 PX4 控制
  ├─ 人物行为：6 状态自主行为状态机
  └─ 录制系统：多模态同步录制
        ↓
Source/zero_sim_up (项目自有 C++ 模块)
```

## 开发路线

| 阶段 | 目标 | 状态 |
|------|------|------|
| Phase 0 | 文档冻结 + Schema 定稿 | 🔄 进行中 |
| Phase 1 | MVP：单场景 + 单 UAV + VLN 基础评测 | ⬜ 待开始 |
| Phase 2 | 程序化场景生成 + 巡检任务扩展 | ⬜ 规划中 |
| Phase 3 | 空地协同（UAV + UGV 联动） | ⬜ 规划中 |

## 核心传感器能力

RGB · 深度图（3 种模式）· 语义分割 · 光流 · 表面法线 · 物体检测 · 激光雷达 · 距离传感器
