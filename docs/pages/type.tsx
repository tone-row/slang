import { Section } from "components/theme";
import { Type } from "slang";

export default function TypePage() {
  return (
    <Section>
      <Type as="h1" size={3}>
        Type
      </Type>
      <Type>This is the type page.</Type>
    </Section>
  );
}
