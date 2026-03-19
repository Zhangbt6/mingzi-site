---
title: 四足机器人步态生成笔记
description: 基于 MIT 的 Cheetah 方案，实践四足机器人的 trot/walk/gallop 步态生成，记录调试过程。
pubDate: "2025-01-05"
tags: [robotics, control, embedded]
categories: [Research]
excerpt: 记录四足机器人步态生成的学习过程，从简单的对角步态到完整的 MPC+WBC 方案。
cover: /assets/spark/banner-3.jpg
---

# 四足机器人步态生成笔记

## 背景

四足机器人的步态控制是经典问题，MIT Cheetah 的方案是当前最实用的开源参考。

## 核心思路

1. **MPC（模型预测控制）**：在高层计算支撑力
2. **WBC（全身体控制）**：在低层分配关节力矩

## Trot 步态

对角线两腿同时着地，周期 0.4s，实测最高速度 1.2m/s。

```python
# 简化的 trot 步长计算
stance_height = 0.1  # 着地高度
step_length = 0.15    # 步长
gait_cycle = 0.4      # 周期（秒）
```

## 后续

gallop 步态正在调试中，对称性破缺导致机器人容易偏航。
