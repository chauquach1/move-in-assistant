import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import { TextInput } from "../(inputs)/TextInput";

export const Keys = () => {

  return (
    <SubjectContainer title="Keys">
      <div className="flex flex-col col-span-2 gap-3">
        <TextInput actualName="numKeys_FrontDoor" subject="Front Door" type="number" />
        <TextInput actualName="numKeys_Garage" subject="Garage" type="number" />
        <TextInput actualName="numKeys_Mail" subject="Mail" type="number" />
        <TextInput actualName="numKeys_HOACommon" subject="HOA/Common" type="number" />
        <TextInput actualName="numKeys_Additional" subject="Additional" />
      </div>
    </SubjectContainer>
  );
}