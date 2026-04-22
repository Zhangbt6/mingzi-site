---
title: 无人机 VLA 研究方向综述
type: misc
date: 2026-04-19
description: 整理 VLA 在无人机与具身智能领域的研究现状，覆盖架构、训练策略、动作表示与评测基准。
tags: [vla, uav, embodied-ai, survey, research]
cover: /assets/spark/banner-3.jpg
---

## 研究背景

Vision-Language-Action（VLA）模型将视觉感知、语言理解与动作生成统一在单一端到端框架中，正在成为具身智能的主流范式。

无人机场景相比桌面 manipulation 面临更严苛的挑战：
- **实时性**：控制频率要求高，推理延迟直接影响飞行安全
- **6-DoF 动作空间**：比单臂操作更高维，动作分块与流匹配是主流方案
- **sim-to-real gap**：仿真到真机的迁移是核心瓶颈
- **机载算力限制**：边缘部署对模型大小有严格约束

## 核心方向

### 端到端 UAV-VLA
直接从图像 + 语言指令输出飞行控制量，代表工作：AutoFly、UAV-Track VLA、CognitiveDrone。

### 分层导航规划
高层 VLM 做语义推理与目标定位，低层控制器执行飞行动作，适合长程复杂指令场景。

### 世界模型辅助
在 latent space 中建模环境演化，支持 action-conditioned future rollout，提升规划安全性。参考：VLA-World（CVPR 2026）。

### 跨载体泛化
统一策略跨不同机器人形态部署，X-Nav（RAL 2026）在移动机器人上验证了可行性。

## 关键论文

- **VLA-World** (2604.09059, CVPR 2026)：自动驾驶 VLA 世界模型，latent rollout + 轨迹规划
- **Aerial VLN Survey** (2604.07705)：首个系统性 Aerial VLN 综述，覆盖 2024-2026
- **UAV+Bimanual VLA Review** (preprints 202604.0664)：VLA 在无人机与双臂机器人的统一综述
- **A Survey on VLA for Embodied AI** (2405.14093)：VLA 基础综述，建立整体认知框架

## 开放问题

1. 长程自然语言指令如何与 6-DoF 连续控制稳定耦合？
2. 机载部署：如何在 Jetson 级算力上运行有效的 VLA 策略？
3. 评测标准化：Aerial VLN 缺乏统一 benchmark，Success Rate / SPL 指标需要针对三维空间重新定义
