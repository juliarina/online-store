import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function CheckboxField({ children }) {
  return (
    <FieldGroup className="mx-auto w-full">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" className="border-black/30 mr-1"/>
        <FieldLabel htmlFor="terms-checkbox-basic">
          {children}
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}