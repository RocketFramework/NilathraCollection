with open("src/app/admin/(authenticated)/planner/steps/FinanceAndBookingStep.tsx", "r") as f:
    content = f.read()

# Fix the onChange setEditingPO manually for properties left over
import re
content = re.sub(
    r'onChange=\{\(e\) => editingPO && savePurchaseOrderAction\(\{ \.\.\.activePO, ([a-zA-Z0-9_]+): ([^\}]+) \}, editingPO\.items \|\| \[\]\)\.then\(\(\) => loadPOs\(\)\)\}',
    r'onChange={(e) => setEditingPO(prev => prev ? { ...prev, \1: \2 } : null)}',
    content
)

# Fix remaining instances
content = content.replace("updatePOStatus(activePO,", "updateLocalPOStatus(")
content = content.replace("generateInvoice(activePO)", "generateInvoiceLocal(editingPO)")
content = content.replace("addPOItem(activePO)", "addLocalPOItem()")
content = content.replace("deletePOItem(activePO, item.id)", "deleteLocalPOItem(item.id)")
content = content.replace("updatePOItem(activePO, item.id,", "updateLocalPOItem(item.id,")
content = content.replace("setPreviewPO(activePO)", "setPreviewPO(editingPO)")
content = content.replace("&& activePO) {", "&& editingPO) {")
content = content.replace("savePurchaseOrderAction({ ...activePO, ...updates }, editingPO.items || []).then(() => loadPOs());", "setEditingPO(prev => prev ? { ...prev, ...updates } : null);")

# Also for setActivePOId(null) that wasn't closePODrawer
content = content.replace("if (activePOId === po.id) setActivePOId(null);", "if (activePOId === po.id) closePODrawer();")

with open("src/app/admin/(authenticated)/planner/steps/FinanceAndBookingStep.tsx", "w") as f:
    f.write(content)
