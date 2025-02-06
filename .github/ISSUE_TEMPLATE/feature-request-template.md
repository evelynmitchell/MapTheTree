# Feature Development Template
name: Feature Request
description: Template for new feature development tasks
title: "[FEATURE] "
labels: ["feature"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for creating a feature development task!
  - type: input
    id: requirement-id
    attributes:
      label: Requirement ID
      description: Related requirement ID (e.g., FR-001)
      placeholder: "FR-XXX"
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Feature Description
      description: Detailed description of the feature
      placeholder: "Describe the feature in detail..."
    validations:
      required: true
  - type: textarea
    id: acceptance-criteria
    attributes:
      label: Acceptance Criteria
      description: List the acceptance criteria
      placeholder: "- [ ] Criterion 1\n- [ ] Criterion 2"
    validations:
      required: true
  - type: dropdown
    id: priority
    attributes:
      label: Priority
      options:
        - P0 (Critical)
        - P1 (High)
        - P2 (Medium)
        - P3 (Low)
    validations:
      required: true
