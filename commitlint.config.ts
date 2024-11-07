import type { UserConfig, RuleConfigCondition } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "content",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ] as [RuleConfigSeverity, RuleConfigCondition, string[]],
  },
  prompt: {
    questions: {
      type: {
        enum: {
          content: {
            description: "Changes that affect content, not code",
            title: "Content only changes",
            emoji: "📝",
          },
        },
      },
    },
  },
};

export default config;
