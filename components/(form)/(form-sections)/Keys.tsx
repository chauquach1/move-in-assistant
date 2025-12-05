import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import { TextInput } from "../(inputs)/TextInput";

export const Keys = () => {

  return (
    <SubjectContainer title="Keys">
      <div className="flex flex-col col-span-2 gap-3">
        <TextInput subject="Front Door" type="number" />
        <TextInput subject="Garage" type="number" />
        <TextInput subject="Mail" type="number" />
        <TextInput subject="HOA/Common" type="number" />
        <TextInput subject="Additional" />
      </div>
    </SubjectContainer>
  );
}